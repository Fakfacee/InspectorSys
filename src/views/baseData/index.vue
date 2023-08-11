<template>
  <el-row :gutter="30">
    <el-col :span="24">
      <el-form :inline="true" label-width="70px">
        <el-form-item label="单管号">
          <el-input clearable style="width: 200px" v-model="queryData" />
        </el-form-item>
        <el-form-item>
          <el-button :icon="Search" type="primary" @click="handleSearch"
            >搜索</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-button :icon="RefreshLeft" @click="handleReset">重置</el-button>
        </el-form-item>
        <el-form-item>
          <el-button :icon="Plus" plain type="primary" @click="handleAddForm"
            >新增</el-button
          ></el-form-item
        >
        <el-form-item
          ><el-button
            :icon="Edit"
            plain
            type="success"
            :disabled="!(selectList.length == 1)"
            @click="handleUpdate(selectList[0])"
            >修改</el-button
          ></el-form-item
        >
        <el-form-item
          ><el-button
            :icon="Delete"
            plain
            type="danger"
            :disabled="!(selectList.length >= 1)"
            @click="handleDelete"
            >删除</el-button
          ></el-form-item
        >
        <el-form-item
          ><el-button
            :icon="Download"
            plain
            type="warning"
            @click="handleExport"
            >导出</el-button
          ></el-form-item
        >
      </el-form>

      <div class="table-block">
        <el-table
          :data="tableData"
          v-loading="loading"
          element-loading-text="加载中..."
          @select="handleSelectionChange"
          @select-all="handleSelectionAll"
          height="750"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column
            type="index"
            width="55"
            label="序号"
            align="center"
          />
          <el-table-column
            label="图纸号"
            show-overflow-tooltip
            align="center"
            prop="DrawingNo"
            width="220"
          />
          <el-table-column
            label="焊口号"
            show-overflow-tooltip
            prop="WeldNo"
            align="center"
            width="80"
          />
          <el-table-column
            label="单管号"
            show-overflow-tooltip
            prop="PipeNo"
            align="center"
            width="220"
          />
          <el-table-column
            label="管径"
            show-overflow-tooltip
            prop="Size"
            align="center"
            width="55"
          />
          <el-table-column
            label="材质"
            show-overflow-tooltip
            prop="MaterialId"
            align="center"
            width="55"
          />
          <el-table-column
            label="组对日期"
            show-overflow-tooltip
            prop="ZuDuiDate"
            align="center"
          />
          <el-table-column
            label="组队检验日期"
            show-overflow-tooltip
            prop="ZuDuiInspectDate"
            align="center"
          />
          <el-table-column
            label="焊接日期"
            show-overflow-tooltip
            prop="WeldingDate"
            align="center"
          />
          <el-table-column
            label="外观检验日期"
            show-overflow-tooltip
            prop="AppearanceInspectDate"
            align="center"
          />
          <el-table-column
            label="外观检验结果"
            show-overflow-tooltip
            prop="AppearanceResult"
            align="center"
            width="120"
          />
          <el-table-column label="操作" align="center">
            <template #default="scope">
              <el-button
                icon="Edit"
                link
                type="primary"
                :disabled="scope.row.isExchange == 0"
                @click="handleUpdate(scope.row)"
                >修改
              </el-button>

              <el-button
                icon="Delete"
                link
                type="primary"
                :disabled="scope.row.isExchange == 0"
                @click="handleDelete(scope.row)"
                >删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 50, 100]"
          :small="small"
          :background="true"
          layout="total, sizes, prev, pager, next, jumper"
          :total="dataTotal"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          style="margin-top: 20px"
        />
      </div>
    </el-col>
  </el-row>

  <el-dialog
    v-model="dialogVisible"
    :title="formTitle"
    width="30%"
    :before-close="handleClose"
  >
    <el-form
      ref="ruleFormRef"
      :model="formData"
      label-width="100px"
      :rules="state.formRules"
    >
      <el-row>
        <el-col :span="20">
          <el-form-item label="图纸号" prop="DrawingNo">
            <el-input v-model="formData.DrawingNo" placeholder="请输入图纸号" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="焊口号" prop="WeldNo">
            <el-input v-model="formData.WeldNo" placeholder="请输入焊口号" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="管径" prop="Size">
            <el-input v-model="formData.Size" placeholder="请输入管径" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="材质" prop="MaterialId">
            <el-select v-model="formData.MaterialId" placeholder="请选择材质">
              <el-option label="CS" value="CS" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="20">
          <el-form-item label="单管号" prop="PipeNo">
            <el-input v-model="formData.PipeNo" placeholder="请输入单管号" />
          </el-form-item>
        </el-col>

        <el-col :span="16">
          <el-form-item label="组对日期" prop="ZuDuiDate">
            <el-date-picker
              v-model="formData.ZuDuiDate"
              type="date"
              placeholder="请选择组对日期"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="组对检验日期" prop="ZuDuiInspectDate">
            <el-date-picker
              v-model="formData.ZuDuiInspectDate"
              type="date"
              placeholder="请选择组对检验日期"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="焊接日期" prop="WeldingDate">
            <el-date-picker
              v-model="formData.WeldingDate"
              type="date"
              placeholder="请选择焊接日期"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="外观检验日期" prop="AppearanceInspectDate">
            <el-date-picker
              v-model="formData.AppearanceInspectDate"
              type="date"
              placeholder="请选择外观检验日期"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="外观检验结果" prop="AppearanceResult">
            <el-radio-group v-model="formData.AppearanceResult">
              <el-radio border :label="1">合格</el-radio>
              <el-radio border :label="2">不合格</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click="handleSave(ruleFormRef)"
          :loading="saveLoading"
        >
          保存
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import {
  Search,
  Plus,
  Edit,
  Delete,
  RefreshLeft,
  Download,
} from "@element-plus/icons-vue";
import { baseDataList, dataUpdate } from "@/Network/data.js";
import { ElMessage, ElMessageBox } from "element-plus";
import { reactive, ref, toRaw, toRefs } from "vue";
import {downLoad} from '@/Network/index'

const state = reactive({
  tableData: [],
  formData: {
    DrawingNo: "",
    WeldNo: "",
    PipeNo: "",
    Size: "",
    MaterialId: "",
    ZuDuiDate: [],
    ZuDuiInspectDate: [],
    WeldingDate: [],
    AppearanceInspectDate: [],
    AppearanceResult: "",
  },
  formRules: {
    DrawingNo: [{ required: true, message: "请输入图纸号", trigger: "blur" }],
    WeldNo: [{ required: true, message: "请输入焊口号", trigger: "blur" }],
    // PipeNo: [{ required: true, message: "请输入图纸号", trigger: "blur" }],
    // Size: "",
    // MaterialId: "",
    ZuDuiDate: [
      {
        type: "date",
        required: true,
        message: "请选择组对日期",
        trigger: "change",
      },
    ],
    // ZuDuiInspectDate: [],
    WeldingDate: [
      {
        type: "date",
        required: true,
        message: "请选择焊接日期",
        trigger: "change",
      },
    ],
  },
  // AppearanceInspectDate: [],
  // AppearanceResult: [],
});

const { tableData, formData } = toRefs(state);

const allData = ref([]);
const currentPage = ref(1);
const pageSize = ref(10);
const dataTotal = ref(null);
const loading = ref(false);
//获取表格数据，自行分页
async function dataListRequest() {
  loading.value = true;
  await baseDataList()
    .then((res) => {
      if (res.status === 200) {
        allData.value = res.data;
        dataPaging();
      } else return Promise.reject(res);
    })
    .catch((erro) => {
      console.log(erro);
    });
  loading.value = false;
}
dataListRequest();

const queriedList = ref(undefined);
//分页
function dataPaging(list) {
  if (!queriedList.value) queriedList.value = list;
  console.log(queriedList.value, "queriedList.value");
  let res = queriedList.value ? queriedList.value : allData.value;
  tableData.value = res.slice(
    (currentPage.value - 1) * pageSize.value,
    currentPage.value * pageSize.value
  );
  dataTotal.value = res.length;
}

//翻页
function handleCurrentChange(val) {
  currentPage.value = val;
  dataPaging();
}

//页条目数改变
function handleSizeChange(val) {
  pageSize.value = val;
  currentPage.value = 1;
  dataPaging();
}

const formTitle = ref(undefined);
//修改弹窗
const dialogVisible = ref(false);
function handleUpdate(row) {
  formTitle.value = "修改表单";
  dialogVisible.value = true;
  const originalData = JSON.parse(JSON.stringify(row));
  formData.value = originalData;
}

//删除
function handleDelete(row) {
  ElMessageBox.confirm(
    `确定要删除图纸号为${
      row.DrawingNo || selectList.value.map((item) => item.DrawingNo)
    }的数据吗？`,
    "系统提示",
    {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    }
  )
    .then(() => {
      ElMessage({
        type: "success",
        message: "删除成功",
      });
    })
    .catch(() => {});
}

//搜索
const queryData = ref(undefined);
function handleSearch() {
  queriedList.value = null;
  console.log(queryData.value, "queryDAta");
  let res = allData.value.filter(
    (item) =>
      item.DrawingNo == queryData.value ||
      item.DrawingNo.includes(queryData.value)
  );
  tableData.value = res;
  dataTotal.value = res.length;
  dataPaging(res);
}

//重置表格
function handleReset() {
  queryData.value = undefined;
  queriedList.value = null;
  dataListRequest();
}

//勾选
const selectList = ref([]);
function handleSelectionChange(selection, row) {
  selectList.value = selection;
}
//全部勾选
function handleSelectionAll(selection) {
  selectList.value = selection;
}

//新增表单
function handleAddForm() {
  formTitle.value = "新增表单";
  dialogVisible.value = true;
  formData.value = {
    DrawingNo: "",
    WeldNo: "",
    PipeNo: "",
    Size: "",
    MaterialId: "",
    ZuDuiDate: [],
    ZuDuiInspectDate: [],
    WeldingDate: [],
    AppearanceInspectDate: [],
    AppearanceResult: "",
  };
}

//保存
const ruleFormRef = ref();
const saveLoading = ref(false);
async function handleSave(formEl) {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      saveLoading.value = true;
      // dataUpdate(state.formData)
      //   .then(res => console.log(res))
      setTimeout(() => {
        tableData.value = [...tableData.value];
        saveLoading.value = false;
        dialogVisible.value = false;
        ElMessage.success("保存成功");
      }, 1000);
    } else {
      console.log("error submit!", fields);
    }
  });
}

//导出
function handleExport() {
  downLoad("downloadsumfile",`summary_${new Date().getTime()}.xlsx`);
}
</script>

<style>
.table-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
