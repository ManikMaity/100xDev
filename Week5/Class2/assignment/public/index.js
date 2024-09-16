const numberElementA = document.getElementById("a");
const numberElementB = document.getElementById("b");
const resultElement = document.getElementById("result");
const addElement = document.getElementById("add");

addElement.addEventListener("click", async () => {
    let a = numberElementA.value;
    let b = numberElementB.value;
    const data = await axios.post(`http://localhost:3001/add`, {
        "a" : a,
        "b" : b
    })
    const sum = data.data.result;
    resultElement.value = Number(sum);
})