<template>
  <div class="container">
    <div class="personal-info-section">
      <div class="navBar">
        <span>关于我</span>
      </div>
      <div class="info-block">
        <div class="avatar">
          <el-avatar :size="86" :src="circleUrl" />
        </div>
        <div class="username-span">
          ADMIN
          <p class="roles">超级管理员</p>
        </div>
      </div>
      <div class="description-wrap">
        <el-descriptions
          class="margin-top"
          title="更多信息"
          :column="2"
          :size="size"
        >
          <template #extra>
            <el-button type="primary">修改资料</el-button>
          </template>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <user />
                </el-icon>
                姓名
              </div>
            </template>
            kooriookami
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <iphone />
                </el-icon>
                联系方式
              </div>
            </template>
            18100000000
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <Location />
                </el-icon>
                工位
              </div>
            </template>
            Suzhou
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <tickets />
                </el-icon>
                备注
              </div>
            </template>
            <el-tag size="small">cooecfluor</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <office-building />
                </el-icon>
                地址
              </div>
            </template>
            珠海市高栏港区中海福陆重工有限公司
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { computed, ref } from 'vue'
import {
  Iphone,
  OfficeBuilding,
  Location,
  Tickets,
  User,
} from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  .personal-info-section {
    padding: 10px;
    width: 400px;
    height: 550px;
    box-shadow: 1px 2px 5px 1px #c7c7c7;
    display: flex;
    flex-direction: column;
    align-items: center;
    .navBar {
      box-sizing: border-box;
      align-self: start;
      width: 100%;
      padding: 10px;
      border-bottom: 1px solid #e7e3e3;
      margin-bottom: 20px;
    }
    .info-block {
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .avatar {
        margin-bottom: 10px;
      }
      .username-span {
        text-align: center;
        font-weight: 600;
        .roles {
          font-size: 14px;
          font-weight: 500;
          color: #707070;
        }
      }
    }
    .description-wrap {
      width: 80%;
      padding: 10px;
    }
  }
}
</style>
