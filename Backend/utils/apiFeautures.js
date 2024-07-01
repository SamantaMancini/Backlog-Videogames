class APIFeauters {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    filter() {
        const queryObj = { ...this.queryString}
        let queryStr = JSON.stringify(queryObj);
        this.query = this.query.find(JSON.parse(queryStr));
        return this
    }
}

module.exports = APIFeauters