function TennisGame() {
    this.reset = () => { //function ชื่อ reset

    }

    this.echo = () => { //function ชื่อ echo
      return 'Love-Love'
    }

    this.playerAGetScore = () => {
      return 'fifteen-love'
    }
}

test('Echo "Love-Love" when game start', () => {
    //Arrange
    let app = new TennisGame()

    //Act
    app.reset()
    let result = app.echo()

    //Assert
    expect(result).toBe('Love-Love')

})

test('Echo "fifteen-Love" when playerA gets first score', () => {
  //Arrange
  let app = new TennisGame()
  app.reset()

  //Act
  app.playerAGetScore()
  let result = app.echo()

  //Assert
  expect(result).toBe('fifteen-Love')

})
