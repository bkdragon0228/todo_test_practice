export const FetchData = async () => {
    const response = await fetch("http://localhost:3000/tasks")

    return response.json()
}