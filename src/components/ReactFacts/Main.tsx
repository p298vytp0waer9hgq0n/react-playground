function capitalizeEveryOther(str: string) {
    let res = "";
    let count = 0;
    for (const l of str) {
        count++;
        res += (count & 1) === 1 ? l.toUpperCase() : l.toLowerCase();
    }
    return res;
    /* return Array.from(str).reduce(
        (acc, letter, index) =>
            (index & 1) === 0
                ? acc + letter.toLowerCase()
                : acc + letter.toUpperCase(),
        ""
    ); */
}

const divs =
    "<div><section></section><div><article><div><div><div><p>something</p><div></article>";

function closeDivs(str: string) {
    // return str.replace(/(<div>.*?)(<div>)/g, "$1</div>");
    /* let index = str.indexOf("<div>");
    let tail = str;
    let res = "";
    let open = false;
    while (index !== -1) {
        res += tail.slice(0, index) + (open ? "</div>" : "<div>");
        tail = tail.slice(index + 5);
        open = !open;
        index = tail.indexOf("<div>");
    }
    return res + tail; */
    const arr = str.split("<div>");
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        res += ((i & 1) === 1 ? "<div>" : "</div>") + arr[i];
    }
    return res;
}

console.log(closeDivs(divs));

export default function Main() {
    return (
        <main className="content">
            <h1 className="content__title">Fun facts about React</h1>
            <ul className="content__list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>{capitalizeEveryOther("Is maintained by Facebook")}</li>
                <li>
                    Powers thousands of enterprise apps, including
                    mobile&nbsp;apps
                </li>
            </ul>
        </main>
    );
}
