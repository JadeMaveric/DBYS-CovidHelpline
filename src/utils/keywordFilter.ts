export default function keywordFilter(JSONData: Record<string, unknown>[], keyword: string) : Record<string, unknown>[] {
    keyword = keyword.toLowerCase()
    if (!keyword) return JSONData
    else return JSONData.filter( obj => JSON.stringify(Object.values(obj)).toLowerCase().search(keyword) >= 0)
}