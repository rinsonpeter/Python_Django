<template>
  <div class="container">
    <br /><br />

    <v-data-table
      :headers="headers"
      :items="allEmp"
      sort-by="id"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Employee List</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="black darken-3"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                Add Employee
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.email"
                        label="Email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.designation"
                        label="Designation"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.hireDate"
                        label="Hire Date"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.usertype"
                        label="User Type"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.salary"
                        label="Salary"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.password"
                        label="Password"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.comments"
                        label="Comments"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="black darken-3" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="black darken-3" text @click="addEmp">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="black darken-3" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="black darken-3" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="white darken-3" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import EmployeeServices from "../services/EmployeeServices";

@Component({ components: {} })
export default class Employees extends Vue {
  private dialog = false;
  private dialogDelete = false;

  headers = [
    {
      text: "Employee ID",
      align: "start",
      sortable: false,
      value: "id",
    },
    { text: "Name", value: "name", sortable: false },
    // { text: 'fathername', value: 'fathername' },
    //  { text: 'dob', value: 'dob' },
    //   { text: 'userName', value: 'userName' },
    //    { text: 'password', value: 'password' },
    //     { text: 'userType', value: 'userType' },
    //      { text: 'gender', value: 'gender' },
    //       { text: 'phone', value: 'phone' },
    { text: "Email", value: "email", sortable: false },
    { text: "Hire Date", value: "hireDate", sortable: false },
    { text: "Designation", value: "designation", sortable: false },
    { text: "Salary", value: "salary", sortable: false },

    // { text: 'address', value: 'address' },
    //  { text: 'comments', value: 'comments' },
    //   { text: 'statusnow', value: 'statusnow' },
    { text: "Actions", value: "actions", sortable: false },
  ];
  allEmp = [];

  editedIndex = -1;

  editedItem = {
    comments: "",
    designation: "",
    email: "",
    hireDate: "",

    name: "",
    password: "",
    salary: "",
    usertype: "",
  };
  defaultItem = {
    comments: "",
    designation: "",
    email: "",
    hireDate: "",

    name: "",
    password: "",
    salary: "",
    usertype: "",
  };
  addEmp() {
    console.log("inside add emp");

    if (this.editedIndex > -1) {
      let id = this.allEmp[this.editedIndex].id;

      console.log("--------------------------------------hiiii");
      EmployeeServices.editEmp(id, this.editedItem)
        .then((response) => {
          console.log(
            "respnse---------------------------------",
            response.data
          );
          this.initialize();
          this.close();
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log("else ad emp");

      EmployeeServices.addEmployee(this.editedItem)
        .then((response) => {
          console.log("-----------add enpps");
          console.log(response.data);

          this.initialize();
          this.close();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  get formTitle() {
    return this.editedIndex === -1 ? "Add Employee" : "Edit Item";
  }

  // watch: {
  //   dialog(val) {
  //     val || this.close();
  //   },
  //   dialogDelete(val) {
  //     val || this.closeDelete();
  //   },
  // },

  initialize() {
    console.log("initialize working");
    EmployeeServices.getAllEmp().then((response) => {
      console.log(response);
      if (response.data) {
        console.log("----------- List", response.data);
        this.allEmp = response.data;
        //response.send(response.data)
      } else console.log("No data found");
    });
  }

  mounted() {
    this.initialize();
  }

  editItem(item) {
    this.editedIndex = this.allEmp.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }

  deleteItem(item) {
    this.editedIndex = this.allEmp.indexOf(item);
    console.log(
      this.editedIndex,
      "hellooooooooooooo",
      this.allEmp[this.editedIndex].id
    );
    this.dialogDelete = true;
  }

//delete employee
  deleteItemConfirm() {
      console.log("------------it's here-dstrht-----------------");
    let id = this.allEmp[this.editedIndex].id;

    EmployeeServices.deleteEmployee(id).then((response) => {
        console.log("------------it's here------------------",response.data);

        this.initialize();
        this.closeDelete();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  close() {
    this.dialog = false;
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
  }

  closeDelete() {
    this.dialogDelete = false;
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
  }



  // save() {
  //   if (this.editedIndex > -1) {
  //     Object.assign(this.allEmp[this.editedIndex], this.editedItem);
  //   } else {
  //     this.allEmp.push(this.editedItem);
  //   }
  //   this.close();
  // }
}
</script>