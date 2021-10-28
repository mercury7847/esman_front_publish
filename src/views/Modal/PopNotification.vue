<template>
  <!-- 실시간 알림(일일 집배송 정보) -->
  <div class="">
    <el-dialog
      title="Today’s Report"
      :visible.sync="popNotification"
      :append-to-body="true"
      class="l-dialog small l-notification-dialog"
      width="300px"
      center>
      <div class="card pale-gray">
        <div class="card-inner">
          <div class="d-flex-be-center">
            <div>
              <p><span class="txt-primary">김한진</span> 기사님! 8월 23일 (월)의<br>집배송 물량은 다음과 같습니다.</p>
              <div class="mt-10">
                <span class="badge green">배송</span><span class="ft-weight-bold">5</span>
                <span class="badge yellow ml-20">집하</span><span class="ft-weight-bold">12</span>
              </div>
            </div>
            <button class="btn"><i class="icon-sm icon-arrow-r"></i></button>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div class="card pale-gray mt-10">
        <div class="card-inner">
          <div class="d-flex-be-center">
            <div>
              <span>오늘의 새 소식 </span><span class="txt-primary">1</span><span>건이 있습니다.</span>
            </div>
            <button class="btn"><i class="icon-sm icon-arrow-r"></i></button>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="popClick">닫기</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'popNotification',
  data() {
    return {
      popNotification: true,
    }
  },
  methods: {
    popClick: function () {
      this.$emit('click')
    },
  }
}
</script>
