function toTitle(string) {
    return string[0].toUpperCase() + string.substr(1)
}

export default function formatDate(dateString) {
    const date = new Date(dateString)
    const month = toTitle(date.toLocaleDateString('pt-BR', {month: 'short'}))
    const day = Number(date.toLocaleDateString('pt-BR', {day: 'numeric'})) + 1
    const year = date.toLocaleDateString('pt-BR', {year: 'numeric'})

    return `${month} ${day}, ${year}`
}