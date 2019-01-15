import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { shortifyURL } from '../actions/shortify';

class Shortify extends React.Component {
    constructor(props) {
        super(props);

        this.state = { searchFor: null, error: null, shortenedURL: null };

        this.shortifyURL = this.shortifyURL.bind(this);
    }

    shortifyURL(path) {
        this.setState({ error: null, shortenedURL: null });

        shortifyURL(path)
            .then(res => (
                this.setState({ shortenedURL: res, searchFor: null })
            ))
            .catch(err => (
                this.setState({ error: err })
            ));
    }
    
    render() {
        return (
            <div className={`content ${this.state.error ? 'hasError' : ''}`}>
                <div className="fieldGroup">
                    <input
                        type="text"
                        value={this.state.searchFor || ''}
                        placeholder="Insert an URL to Shortify!"
                        onChange={e => this.setState({ searchFor: e.target.value })}
                        className="input"
                    />
                    <button
                        className="search"
                        type="submit"
                        disabled={!this.state.searchFor}
                        onClick={() => this.shortifyURL(this.state.searchFor)}
                    >
                        SHORTIFY
                    </button>
                </div>

                {!!this.state.error &&
                    <div className="error">{this.state.error.message}</div>
                }

                {!!this.state.shortenedURL &&
                    <div className="result">
                        <a href={this.state.shortenedURL.shortUrl}>
                            {this.state.shortenedURL.shortUrl}
                        </a>
                        <CopyToClipboard text={this.state.shortenedURL.shortUrl}>
                            <div className="copy">COPY LINK</div>
                        </CopyToClipboard>
                    </div>
                }
            </div>
        );
    }
}

export default Shortify;
