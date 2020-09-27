import React from 'react';
import SimpleArticle from '../component/SimpleArticle.js';
import ImageHeader from '../component/ImageHeader.js';
import Card from '../component/Card.js';

export default class MainDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: props.articles,
            filters: props.filters,
        }
        this.changeFilters = this.changeFilters.bind(this);
    }

    render() {
        return (
            <div>
                <div> {this.renderFilterTab()} </div>
                <div> {this.props.articles.filter(a => this.applyFilters(a, this.state.filters)).map(this.renderArticle)} </div>
            </div>
        );
    }

    renderFilterTab() {
        return (
            <input type="text" onKeyUp={this.changeFilters}></input>
        );
    }

    renderArticle(article) {
        if(article.type === 'image') {
            return (
                <Card key={article.id} content={
                    <ImageHeader title={article.title} img={article.img}/>
                }>
                </Card>
            )
        }
        else if(article.type === 'simple') {
            return (
                <Card key={article.id} content={
                    <SimpleArticle title={article.title} content={article.content}/>
                }>
                </Card>
            );
        }
    }

    changeFilters(e) {
        const filterText = e.target.value;
        console.log(`{filterText = ${filterText}}`);
        if(filterText.length > 3) {
            const splittedFilters = filterText.split(/\s+/);
            this.setState({
                filters: splittedFilters,
            });
        }
        else {
            this.setState({
                filters: null,
            });
        }
    }

    applyFilters(article, filters) {
        if(filters) {
            return filters.findIndex(f => f && article.title.includes(f)) !== -1;
        }
        return true;
    }
}