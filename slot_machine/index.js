class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Slot machines!</h1>
        <Machine 
          s1=":apple:"
          s2=":banana:"
          s3=":apple:"
        />

        <Machine 
          s1=":apple:"
          s2=":banana:"
          s3=":banana:"
        />

        <Machine 
          s1=":apple:"
          s2=":apple:"
          s3=":apple:"
        />
        
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))