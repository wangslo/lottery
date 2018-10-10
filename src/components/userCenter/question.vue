<template>
  <div>
    <app-header :leftTitle="leftTitle" :leftTitle2="leftTitle2" :rightTitle="rightTitle"></app-header>
    <textarea class="input_container" placeholder="打开你的脑洞">
    </textarea>
    <div class="upload_container">
      <input id="upload_file" type="file" style="display: none;" accept='image' name="file"  @change="fileChange($event)"/>
      <input id="upload_file1" type="file" style="display: none;" accept='image/*' capture="camera" name="file"  @change="fileChange($event)"/>
      <div class="image-item space" @click="showActionSheet()">
        <div class="image-up"></div>
      </div>
      <div class="upload_warp">
        <div class="upload_warp_img">
          <div class="upload_warp_img_div" v-for="(item,index) in imgList">
            <div class="upload_warp_img_div_top">
              <img src="../../../static/img/x.png" class="upload_warp_img_div_del" @click="fileDel(index)" width="10px" height="10px">
            </div>
            <img :src="item.file.src" style="display: inline-block;width: 90px;height: 90px;" @touchstart="gtouchstart(index)" @touchmove="gtouchmove()" @touchend="gtouchend()">
          </div>
          <div class="upload_warp_left" id="upload_warp_left" @click="fileClick()" v-if="this.imgList.length < 6">
            <!--<img src="../assets/upload.png">-->
            <img src="../../assets/addImg.png" class="imgs" style="display: inline-block;width: 90px;height: 90px;"/>
          </div>
        </div>
      </div>
    </div>
    <transition name="pull-up">
      <div class="photo-page" v-show="showPhotos">
        <div>更换头像</div>
        <div @click="getPhoto">拍照</div>
        <div @click="getGalleryImgs">选择一张照片</div>
        <div @click="cancelPhoto">取消</div>
      </div>
    </transition>
    <app-toast v-show="showtoast" :isConfirm="isConfirm" :text="text" :text2="text2" :rightText2="rightText2"></app-toast>
  </div>
</template>
<script type="text/ecmascript-6">
  import AppHeader from '@/components/header'
  import toast from '../utils/toast'
  export default {
    name: "Question",
    data(){
      return{
        leftTitle: '意见反馈',
        leftTitle2: '',
        rightTitle: '提交',
        imgList: [],
        datas: new FormData(),
        timeOutEvent: '',
        showPhotos: false,
        showtoast: false,
        isConfirm: false,
        text: '提交成功，',
        text2: '非常感谢你提出的意见！',
        rightText2: '确认',
      }
    },
    components:{
      'app-header': AppHeader,
      'app-toast': toast,
    },
    methods:{
      cancelPhoto(){
        this.showPhotos = false
      },
      getPhoto(){
        this.showPhotos = false;
        $('#upload_file1').click();
      },
      getGalleryImgs(){
        this.showPhotos = false;
        $('#upload_file').click();
      },
      goToPage(){
        this.showtoast = true
      },
      doPrompt(){
        this.$router.push({
          name: 'Personal',
        })
        this.showtoast = false
      },
      returnPage(){
        this.$router.push({
          name: 'Personal',
        })
      },
      //开始按
      gtouchstart(index){
        var _this = this;
        this.timeOutEvent = setTimeout(function(){
          console.log(_this.imgList)
          if (confirm("是否删除")) {
            _this.imgList.splice(index, 1);
          }
        },500);//这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适
        return false;
      },
      //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
      gtouchend(){
        clearTimeout(this.timeOutEvent);//清除定时器
        if(this.timeOutEvent!=0){
          console.log("end")
        }
        return false;
      },
      //如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
      gtouchmove(){
        clearTimeout(this.timeOutEvent);//清除定时器
        this.timeOutEvent = 0;
        console.log("move")
      },
      //调用相册&相机
      fileClick() {
        // $('#upload_file').click();
        this.showPhotos = true
      },
      //调用手机摄像头并拍照
      getImage() {
        let cmr = plus.camera.getCamera();
        cmr.captureImage(function(p) {
          plus.io.resolveLocalFileSystemURL(p, function(entry) {
            compressImage(entry.toLocalURL(),entry.name);
          }, function(e) {
            plus.nativeUI.toast("读取拍照文件错误：" + e.message);
          });
        }, function(e) {
        }, {
          filter: 'image'
        });
      },
      //从相册选择照片
      galleryImgs() {
        plus.gallery.pick(function(e) {
          let name = e.substr(e.lastIndexOf('/') + 1);
          compressImage(e,name);
        }, function(e) {
        }, {
          filter: "image"
        });
      },
      //点击事件，弹出选择摄像头和相册的选项
      showActionSheet() {
        let bts = [{
          title: "拍照"
        }, {
          title: "从相册选择"
        }];
        plus.nativeUI.actionSheet({
            cancel: "取消",
            buttons: bts
          },
          function(e) {
            if (e.index == 1) {
              this.getImage();
            } else if (e.index == 2) {
              this.galleryImgs();
            }
          }
        );
      },
      fileChange(el) {
        this.files=$("#upload_file").get(0).files;
        console.log(this.files.length);
        for(let i=0;i<this.files.length;i++){
          this.datas.append("file",this.files[i]);
        }
        this.show1=false;
        console.log(typeof this.files);
        console.log(this.files);
        if (!el.target.files[0].size) return;
        this.fileList(el.target);
        el.target.value = ''
      },
      fileList(fileList) {
        let files = fileList.files;
        for (let i = 0; i < files.length; i++) {
          //判断是否为文件夹
          if (files[i].type != '') {
            this.fileAdd(files[i]);
          } else {
            //文件夹处理
            this.folders(fileList.items[i]);
          }
        }
      },
      //文件夹处理
      folders(files) {
        let _this = this;
        //判断是否为原生file
        if (files.kind) {
          files = files.webkitGetAsEntry();
        }
        files.createReader().readEntries(function (file) {
          for (let i = 0; i < file.length; i++) {
            if (file[i].isFile) {
              _this.foldersAdd(file[i]);
            } else {
              _this.folders(file[i]);
            }
          }
        })
      },
      fileAdd(file) {
        //总大小
        this.size = this.size + file.size;
        //判断是否为图片文件
        if (file.type.indexOf('image') == -1) {
          file.src = 'wenjian.png';
          this.imgList.push({
            file
          });
        } else {
          let reader = new FileReader();
          reader.vue = this;
          reader.readAsDataURL(file);
          reader.onload = function () {
            file.src = this.result;
            this.vue.imgList.push({
              file
            });
          }
        }
      },
      fileDel(index) {
        this.size = this.size - this.imgList[index].file.size;//总大小
        this.imgList.splice(index, 1);
      },
      bytesToSize(bytes) {
        if (bytes === 0){
          return '0 B';
        }
        let k = 1000, // or 1024
          sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
      },
      dragenter(el) {
        el.stopPropagation();
        el.preventDefault();
      },
      dragover(el) {
        el.stopPropagation();
        el.preventDefault();
      },
      drop(el) {
        el.stopPropagation();
        el.preventDefault();
        this.fileList(el.dataTransfer);
      },
      shows(et,tx){
        this.strut=et;
        this.txt=tx;
      },
      // handleClick(){
      //   this.$store.commit('add')
      // },
    },
  }
</script>
<style lang="scss" scoped>
  .input_container{
    width: 90%;
    height: 400px;
    margin: 0 auto;
    display: block;
    margin-top: 96px;
  }
  .upload_warp_img{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /*justify-content: space-around;*/
    width: 90%;
    margin: 40px auto;
    .upload_warp_img_div{
      margin-right: 20px;
    }
    .upload_warp_left{
      /*margin-left: 20px;*/
      /*float: left;*/
    }
  }
  .upload_warp_img_div_top{
    width: 20px;
    height: 20px;
    position: absolute;
    margin-left: 160px;
    display: none;
  }
  .photo-page{
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    div{
      width: 600px;
      background: red;
      margin: 0 auto;
      height: 80px;
      line-height: 80px;
    }
    div:nth-child(1){
      border-radius: 10px 10px 0px 0px;
      border-bottom: 2px solid black;
    }
    div:nth-child(2){
      border-bottom: 2px solid black;
    }
    div:nth-child(3){
      border-radius: 0px 0px 10px 10px;
    }
    div:nth-child(4){
      margin-top: 10px;
      border-radius: 10px;
    }
  }
  %common1 {
    opacity: 1;
    -ms-transform: scaleY(1);
    transform: scaleY(1);
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0.1s,
    opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0.1s;
    -ms-transform-origin: center top;
    transform-origin: center top;
  }
  .pull-up-enter-active,
  .pull-up-leave-active {
    @extend %common1;
    transform-origin: center bottom;
  }
  .pull-up-enter,
  .pull-up-leave-active{
    opacity: 0;
    -ms-transform: scaleY(0);
    transform: scaleY(0);
  }
</style>
