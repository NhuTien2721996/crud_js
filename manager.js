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
    if (curIndex===-1){
        add(student);
    }else {
        dataList[curIndex]=student;
        curIndex=-1;
        document.getElementById('btn-update').innerHTML='Thêm';
        displayAll();

    }
}
function displayAll() {
    dataListTag.innerHTML="";
    for (i=0;i<dataList.length;i++){
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
