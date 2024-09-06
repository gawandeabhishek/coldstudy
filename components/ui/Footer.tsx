const data = [
    {
        title: "Privacy & Policy"
    },
    {
        title: "Contact: mail.com"
    },
    {
        title: "Help"
    },
]

export default function Footer() {
    return (
        <footer className="absolute bottom-0 w-full">
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 grid-rows-2">
                {data.map((info, key) => (<li key={key}>{info.title}</li>))}
            </ul>
        </footer>
    )
}