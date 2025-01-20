function buildURL(url: string, ...queryParams: string[]): string{
    let query = queryParams.join('/');
    return `${url}?${query}`;
}

console.log(buildURL('https://www.google.com', 'q=typescript', 'oq=typescript'));