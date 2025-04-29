//Your code goes here 
let allNumber = document.querySelectorAll(".item")
let count = 0
for (let t of allNumber) {
    count++
    t.draggable = "true"
    t.id = "bh" + count
    t.addEventListener("dragstart", (e) => {
        let val = e.target.id

        e.dataTransfer.setData("text/plain", val)
        e.target.style.opacity = "0.5"
        console.log("start");


    })
    t.addEventListener("dragend", (e) => {
        console.log("end");
        e.target.style.opacity = "1"
    })

    let arr = ["dragover", "dragenter", "drop"]


    arr.forEach((val) => {

        for (let t of allNumber) {
            t.addEventListener(val, (e) => {
                e.preventDefault()
                if (val === "drop") {


                    let tag = e.dataTransfer.getData("text")
                    let getTag = document.getElementById(tag)
                    e.target.id = tag;
                    getTag.id = e.target.id
                    let text1 = getTag.innerHTML;
                    let text2 = t.innerHTML
                    t.innerHTML = text1
                    getTag.innerHTML = text2





                }

            })
        }
    })
}
