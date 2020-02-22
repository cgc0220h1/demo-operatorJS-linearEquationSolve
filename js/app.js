function solve() {
    let a = +prompt("Xin nhập hệ số a", "");
    let b = +prompt("Xin nhập hệ số b", "");
    if (a === 0) {
        alert("Đây không phải là phương trình bậc 1");
    } else {
     alert("Nghiệm của phương trình là " + -b / a);
    }

}
