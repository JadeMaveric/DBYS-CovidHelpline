export default function keywordFilter(JSONData: JSON[], keyword: string) : JSON[] {
    keyword = keyword.toLowerCase()
    if (!keyword) return JSONData
    else return JSONData.filter( obj => JSON.stringify(Object.values(obj)).toLowerCase().search(keyword) >= 0)
}