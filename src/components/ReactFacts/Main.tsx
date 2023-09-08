function capitalizeEveryOther(str: string) {
    let res = "";
    let count = 0;
    for (const l of str) {
        count++;
        res += (count & 1) === 0 ? l.toUpperCase() : l.toLowerCase();
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
