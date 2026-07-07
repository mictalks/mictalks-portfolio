export const fetchHygraphQuery = async (
    query: string,
    revalidate?: number,
    variables?: Record<string, unknown>
) => {
    const response = await fetch(process.env.HYGRAPH_URL!, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`
        },
        body: JSON.stringify({ query, variables }),
        next: {
            revalidate
        }
    })

    const { data, errors } = await response.json();

    if (errors) {
        throw new Error(errors.map((error: { message: string }) => error.message).join('\n'))
    }

    return data
}
