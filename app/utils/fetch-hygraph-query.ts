export const fetchHygraphQuery = async (
    query: string,
    revalidate?: number,
    variables?: Record<string, unknown>
) => {
    const hygraphUrl = process.env.HYGRAPH_URL
    const hygraphToken = process.env.HYGRAPH_TOKEN

    if (!hygraphUrl) {
        throw new Error('Missing HYGRAPH_URL environment variable.')
    }

    const response = await fetch(hygraphUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...(hygraphToken ? { Authorization: `Bearer ${hygraphToken}` } : {})
        },
        body: JSON.stringify({ query, variables }),
        ...(typeof revalidate === 'number' ? { next: { revalidate } } : {})
    })

    const { data, errors } = await response.json();

    if (errors) {
        throw new Error(errors.map((error: { message: string }) => error.message).join('\n'))
    }

    return data
}
