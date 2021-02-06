function toTitle(string) {
    return string[0].toUpperCase() + string.substr(1)
}

function fillNumber(number) {
    return number.padStart(2, "0")
}

export default function formatDate(dateString) {
    const date = new Date(dateString)
    const month = toTitle(date.toLocaleDateString('pt-BR', { month: 'short' }))
    const day = fillNumber(date.toLocaleDateString('pt-BR', { day: 'numeric' }))
    const year = date.toLocaleDateString('pt-BR', { year: 'numeric' })

    return `${month} ${day}, ${year}`
}