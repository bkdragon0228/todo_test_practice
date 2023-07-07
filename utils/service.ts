export const FetchData = async () => {
    const response = await fetch("/tasks")

    return response.json()
}