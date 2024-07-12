export function CreateTodo() {
    return <div>

        <input style={{
            margin: 10,
            padding: 10
        }} type="text" placeholder="Title" /> <br /> <br />

        <input style={{
            margin: 10,
            padding: 10
        }} type="text" placeholder="Description"/> <br /> <br />

        <button style={{
            margin: 10,
            padding: 10
        }}>Add a Todo</button>
        
    </div>
}