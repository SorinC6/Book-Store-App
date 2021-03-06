import React from "react";
import Loader from "react-loader-spinner";
import SimpleBook from "../BookCardsComponent/SimpleBook";
import styled from "styled-components";
import NavigationComponent from "../NavigationComponent/NavigationComponent";
import HeaderImgHeader from "../HeaderImgComponent/HeaderImg";
import Footer from "../FooterComponent/Footer";
import "./HomeComponent.css";
import SearchBar from "../SearchBarComponent/SearchBar";

const ContainerList = styled.div`
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 10px;
  padding-top: 0px;
  padding-bottom: 150px;
`;

// const ContainerFilter = styled.div`
//   max-width: 80%;
//   margin: 0 auto;
//   display: flex;
//   flex-wrap: wrap;
// `;

class HomeComponent extends React.Component {
  state = {
    searchValue: "",
    filterBooks: []
  };

  onChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    //console.log('Working');
    this.filerBook();
  };

  filerBook = () => {
    const search = this.state.searchValue;
    console.log("Searchmmm ", this.state.searchValue);

    const fl = this.props.books.filter(book => {
      //console.log('title ', book.title);

      //debugger;
      return book.title.includes(search);
    });
    this.setState({
      filerBooks: fl
    });
  };

  render() {
    return (
      <div style={{ backgroundImage: "linear-gradient(#C6FFDD, #FBD786)" }}>
        <header>
          <nav className="nav-container">
            <NavigationComponent />
          </nav>
          <HeaderImgHeader />
        </header>

        <SearchBar
          searchValue={this.state.searchValue}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <ContainerList>
          {this.state.filerBooks ? (
            this.state.filerBooks.map(book => {
              return <SimpleBook book={book} key={book.id} {...this.props} />;
            })
          ) : (
            <ContainerList>
              {this.props.isFetchingBooks ? (
                <Loader type="Puff" color="#00BFFF" height="100" width="100" />
              ) : (
                this.props.books.map(book => {
                  return (
                    <SimpleBook key={book.id} book={book} {...this.props} />
                  );
                })
              )}
            </ContainerList>
          )}
        </ContainerList>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
// 	return {
// 		isDeleting: state.isDeletingBook,
// 		error: state.error
// 	};
// };

export default HomeComponent;
