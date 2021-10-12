export class CommentShow {

    private _id: number;
    private _date: Date;
    private _author: string;
    private _content: string;

    static commentLength = 1;

    //By default Date are generated at the time of instanciation
	constructor(date: Date = new Date(), author: string, content: string) {
		this._id = CommentShow.commentLength++;
		this._date = date;
		this._author = author;
		this._content = content;
	}


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter date
     * @return {Date}
     */
	public get date(): Date {
		return this._date;
	}

    /**
     * Getter author
     * @return {string}
     */
	public get author(): string {
		return this._author;
	}

    /**
     * Getter content
     * @return {string}
     */
	public get content(): string {
		return this._content;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter date
     * @param {Date} value
     */
	public set date(value: Date) {
		this._date = value;
	}

    /**
     * Setter author
     * @param {string} value
     */
	public set author(value: string) {
		this._author = value;
	}

    /**
     * Setter content
     * @param {string} value
     */
	public set content(value: string) {
		this._content = value;
	}

}
