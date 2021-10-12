import { CommentShow } from "./commentShow.model";
export class Show {

    private _id: number;
    private _title: string;
    // First's season release date
    private _releaseDate: Date;
    private _seasons: number;
    private _description: string;
    private _critic: string;
    private _poster: string;
    private _comments: Array<CommentShow>;

    static showLength = 1;

    // By default Comments are set with an empty array
	constructor(title: string, releaseDate: Date, seasons: number, description: string, critic: string, moviePoster: string, comments: Array<CommentShow> = []) {
		this._id = Show.showLength++;
		this._title = title;
		this._releaseDate = releaseDate;
		this._seasons = seasons;
		this._description = description;
		this._critic = critic;
		this._poster = moviePoster;
		this._comments = comments;
	}


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Getter releaseDate
     * @return {Date}
     */
	public get releaseDate(): Date {
		return this._releaseDate;
	}

    /**
     * Getter seasons
     * @return {number}
     */
	public get seasons(): number {
		return this._seasons;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter critic
     * @return {string}
     */
	public get critic(): string {
		return this._critic;
	}

    /**
     * Getter poster
     * @return {string}
     */
	public get poster(): string {
		return this._poster;
	}

    /**
     * Getter comments
     * @return {Array<CommentShow>}
     */
	public get comments(): Array<CommentShow> {
		return this._comments;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter title
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}

    /**
     * Setter releaseDate
     * @param {Date} value
     */
	public set releaseDate(value: Date) {
		this._releaseDate = value;
	}

    /**
     * Setter seasons
     * @param {number} value
     */
	public set seasons(value: number) {
		this._seasons = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter critic
     * @param {string} value
     */
	public set critic(value: string) {
		this._critic = value;
	}

    /**
     * Setter poster
     * @param {string} value
     */
	public set poster(value: string) {
		this._poster = value;
	}

    /**
     * Setter comments
     * @param {Array<CommentShow>} value
     */
	public set comments(value: Array<CommentShow>) {
		this._comments = value;
	}

    /**
     * 
     * @param commentShowAdded 
     */
    public addComment(commentShowAdded: CommentShow) {
        this._comments.unshift(commentShowAdded);
    }

    /**
     * Cast a Json Object to Show
     * @param show 
     * @returns 
     */
    static fromJson(show: any): Show {
        // cast every comment item to CommentShow
        show.comments = show.comments.map((comment: any) => new CommentShow(new Date(comment.date), comment.author, comment.content));
        show.releaseDate = new Date(show.releaseDate);
        return new Show(
         show.title,
         show.releaseDate,
         show.seasons,
         show.description,
         show.critic,
         show.poster,
         show.comments
        )
    }
    
}