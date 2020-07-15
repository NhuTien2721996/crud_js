$(document).ready(function () {
    $('#tabs').tabs({
        collapsible: false,
    });
});
let dataList = [];
let dataListTag = document.getElementById('data');


function create() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let group = document.getElementById('group').value;
    let student = {
        "name": name,
        "age": age,
        "group": group
    };
    if (name===""){
        document.getElementById('error_name').innerHTML="* Vui lòng nhập đầy đủ họ và tên";
        $("#name").css("border","1px solid red");
    }
    if (age===""){
        document.getElementById('error_age').innerHTML="* Vui lòng nhập tuổi";
        $("#age").css("border","1px solid red");
    }
    if (group===""){
        document.getElementById('error_group').innerHTML="* Vui lòng nhập lớp";
        $("#group").css("border","1px solid red");
    }
    if (curIndex===-1 && name && age && group){
        add(student);
        $("#name").css("border","1px solid #ced4da");
        $("#age").css("border","1px solid #ced4da");
        $("#group").css("border","1px solid #ced4da");
        document.getElementById('error_group').innerHTML="";
        document.getElementById('error_age').innerHTML="";
        document.getElementById('error_name').innerHTML="";


    }else {
        dataList[curIndex]=student;
        curIndex=-1;
        document.getElementById('btn-update').innerHTML='Thêm';
        displayAll();

    }
}
function displayAll() {
    dataListTag.innerHTML="";
    for (let i=0;i<dataList.length;i++){
        let student=dataList[i];
        dataListTag.innerHTML += "<tr>" +
            "<td>" + (i+1) + "</td>" +
            "<td>" + student.name + "</td>" +
            "<td>" + student.age + "</td>" +
            "<td>" + student.group + "</td>" +
            "<td><button class='btn btn-warning' onclick='edit("+(i)+")'>Sửa</button></td>"+
            "<td><button class='btn btn-danger' onclick='destroy("+(i)+")'>Xóa</button></td>" + "</tr>";
    }
}

function add(student){
    dataList.push(student);
    dataListTag.innerHTML += "<tr>" +
        "<td>" + dataList.length + "</td>" +
        "<td>" + student.name + "</td>" +
        "<td>" + student.age + "</td>" +
        "<td>" + student.group + "</td>" +
        "<td><button class='btn btn-warning' onclick='edit("+(dataList.length-1)+")'>Sửa</button></td>"+
        "<td><button class='btn btn-danger' onclick='destroy("+(dataList.length-1)+")'>Xóa</button></td>" + "</tr>";
}
function destroy(id) {
    dataList.splice(id, 1);
    displayAll();
}

let curIndex=-1;
function edit(id) {
    curIndex=id;
    let student=dataList[id];
    document.getElementById('name').value=student.name;
    document.getElementById('age').value=student.age;
    document.getElementById('group').value=student.group;
    document.getElementById('btn-update').innerHTML='Cập nhật';
}
