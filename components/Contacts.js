import User from "../components/User";


export default function Contacts({persons}) {
console.log(persons);

    return (
    <section>
        <h1>Contacts</h1>
        <User/>
        <User />
    </section>
    );
}
