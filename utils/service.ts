export const FetchData = async () => {
    const response = await fetch("/tasks")
    const result = await response.json()

    return result
}