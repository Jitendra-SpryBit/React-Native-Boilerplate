
export function encodedString(params: object) {
    let urlString: Array<any> = []
    for (let i = 0; i < Object.keys(params).length; i++) {
        let key = Object.keys(params)[i]
        let value = Object(params)[key]
        urlString.push(`${key}=${value}`)
    }
    return urlString.length > 0 ? `?${urlString.join("&")}` : null
}


