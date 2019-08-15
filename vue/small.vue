<template>
  <div class="add_new_app">
    <CContentHeader content="新建小程序" :isShowIcon="true" />

    <div class="ana_content">
      <div class="ana_content_wrap">
        <AppInfo :icon="appContent.icon" :inputmodel="uploadInfo" />
        <AppVersion :appinfo="appContent" />
        <viewRange @allow_ranges="allow_ranges" />
        <AppPreviewImg :previews="uploadInfo.previews" />
        <selectLocation :radio="uploadInfo" />

        <uploadSmallQrcode :previews="uploadInfo.qrcode" />

        <AppAddBtn @add="addBtn" />

      </div>
    </div>
  </div>
</template>
<script>
import AppInfo from "./components/appInfo.vue";
import AppVersion from "./components/appVersion";
import AppPreviewImg from "./components/appPreviewImg";
import AppAddBtn from "./components/appCreateBtn";
import uploadApp from "./components/uploadApp";
import selectLocation from './components/selectLocation';
import viewRange from './components/viewRange'
import uploadSmallQrcode from './components/uploadSmallQrcode'

// 公有方法合并
import myMixinFn from './mixinFn'
export default {
  mixins: [myMixinFn],
  data() {
    return {
      // appInfoParser: {}, // 解析出来的appInfoParse

      // 传递给子组件的一些参数 从 appInfo中取得
      appContent: {},

      // 要上传的信息 传递给子组件让子组件动态改变值
      uploadInfo: {
        appName: "", // 应用名称
        appDes: "", // 应用介绍
        previews: [], // 预览图片
        typeid: '', // typeid 应用分类 (场外 户内)
        allow_ranges: [], // 允许的
        qrcode: []
      },

      middleFilesResult: {
        appFileUrl: "", // 应用url地址
        logoUrl: '', // logoURL地址
        previews: [], // 预览图片地址
      }
    };
  },

  methods: {
    allow_ranges(arrAllow) {
      console.log('这里拿到选择的东西');
      console.log(arrAllow);
      // 修改允许的
      let item;
      for (let i = 0, length = arrAllow.length; i < length; i++) {
        item = arrAllow[i];
        this.uploadInfo.allow_ranges.push({
          type: item.type,
          data: item.depid
        });
      }
    },

    // 上传logo
    async uploadLogo() {
      let logoUrl = await this.mixinBase64toUrl(this.appContent.icon);

      if (!logoUrl) {
        return console.log('logo上传出错了');
      }

      console.log('url路径地址');
      console.log(logoUrl);

      this.middleFilesResult.logoUrl = logoUrl[0].file;
      // logo上传完成 上传应用的所有的一些信息
      this.createApp();
    },

    // 上传预览图
    async uploadPreviewImg() {
      console.log('获取到的图片列表');
      console.log(this.uploadInfo.previews.files);
      try {
        if (!(this.uploadInfo.previews.files && this.uploadInfo.previews.files.length !== 0)) {
          // 如果不存在 或者 这个的长度为0 直接退出
          this.$zero.ToastWarning('没有预览图片');
          // 上传logo
          this.uploadLogo();
          return;
        }
        let uploadResult = await this.mixinUploadImg(this.uploadInfo.previews.files);

        // 上传logo
        this.uploadLogo();

        console.log('上传预览图结果');
        console.log(uploadResult);
        if (!uploadResult) {
          return;
        }

        for (let i = 0; i < uploadResult.length; i++) {
          this.middleFilesResult.previews.push(uploadResult[i].file);
        }
        // this.middleFilesResult.previews = 
      } catch (e) {
        console.log('执行过程出错了');
        console.log(e);
      }
    },

    // 创建app应用
    async createApp() {
      console.log('创建app应用');
      console.log('appCount');
      console.log(this.appContent);
      console.log('上传的什么东西');
      console.log(this.uploadInfo);
      console.log('应用的链接');
      console.log(this.middleFilesResult);

      // 此时肯定有这个东西了 之前判断很多次了
      let company_id = this.$zero.getCompany_id();
      let user_id = this.$zero.getUserid();

      console.log('创建应用接口调用');
      // 此刻全部上传完成 调取上传应用的接口
      let uploadResult = await this.$api.application.createIOS({
        company_id: company_id,
        _name: this.uploadInfo.appName,
        typeid: this.uploadInfo.typeid,
        icon: this.middleFilesResult.logoUrl,
        description: this.uploadInfo.appDes,
        founder: user_id,
        allow_ranges: this.uploadInfo.allow_ranges,
        manages: [user_id],
        agentid: this.appContent.name,
        build: 'build ' + this.appContent.build,
        storage_url: this.middleFilesResult.appFileUrl,
        version: this.appContent.version,
        size: this.appContent.size + 'M',
        previews: this.middleFilesResult.previews,
        // update_description: obj.update_description,
        package_type: ''
        // package_type: obj.package_type
      });

      console.log('上传结果');
      console.log(uploadResult);
    },

    // 点击了创建应用按钮
    async addBtn() {
      console.log("点击了创建应用按钮");
      /**
       * 点击了创建的流程，后面可等待优化
       *  1. 先去单独的上传应用包 -----> 换取应用包的网络链接地址
       *  2. 上传预览图 ----> 换取预览连接地址
       *  3. 上传base64位logo ---> 换取logo地址
       *  4. 拿到上述三个东西之后，再拿去已有的信息，上传，所有信息，创建成功
       */

      // 在这里统筹全局
      try {
        // 通过文件换取url地址
        let uploadAppResult = await this.mixinUploadApp2url(this.appFile[0]);

        if (!uploadAppResult) {
          // 如果不存在则执行出错了
          return console.log('上传文件就出错了！');
        }
        // 结果存下来
        this.middleFilesResult.appFileUrl = uploadAppResult.file; // 这个也存储成功了

        // 上传完成应用包之后 上传预览
        await this.uploadPreviewImg();

      } catch (e) {
        console.log('执行过程出错了');
        console.log(e);
      }
    },

  },
  components: {
    AppInfo,
    AppVersion,
    AppPreviewImg,
    AppAddBtn,
    uploadApp,
    selectLocation,
    viewRange,
    uploadSmallQrcode, // 上传小程序二维码

  }
};
</script>
<style>
.add_new_app {
  height: calc(100% - 51px);
}
.ana_content {
  margin: 20px 35px;
}
.ana_content_wrap {
  padding: 0 40px;
  background: #fff;
}
.ana-cover-wrap {
  width: 100%;
  height: 100%;
}
</style>
