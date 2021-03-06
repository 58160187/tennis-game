function TennisGame() {
    const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']
    this.playerAScore = 0
    this.playerBScore = 0

    this.reset = () => {
        this.playerAScore = 0
        this.playerBScore = 0
    }

    this.echo = () => {
        return `${scoreString[this.playerAScore]} - ${scoreString[this.playerBScore]}`
    }

    this.playerAGetScore = () => {
        this.playerAScore++
    }

    this.playerBGetScore = () => {
        this.playerBScore++
    }
    
}

describe ('echo()', () => {
  let app //ประกาศตัวแปรไว้ใต้ฟังก์ชัน describe ฟังก์ชันทุกฟังก์ชันที่อยู่ใต้ฟังก์ชัน describe จะสามารถเรียกใช้ตัวแปรนี้ได้

  beforeEach(() => {
    app = new TennisGame()
    app.reset()
  })

  test('Echo "Love - Love" when game start', () => {
      // Arrange
      //let app = new TennisGame()

      // Act
      //app.reset()
      let result = app.echo()

      // Assert
      expect(result).toBe('Love - Love')
  })

  test('Echo "Fifteen - Love" when playerA get first score', () => {
      // Arrange
      //let app = new TennisGame()
      //app.reset()
      app.playerAGetScore()

      // Act
      let result = app.echo()

      // Assert
      expect(result).toBe('Fifteen - Love')
  })

  test('Echo "Love - Fifteen" when playerB get first score', () => {
      // Arrange
      //let app = new TennisGame()
      //app.reset()
      app.playerBGetScore()

      // Act
      let result = app.echo()

      // Assert
      expect(result).toBe('Love - Fifteen')
  })

  test('Echo "Thirty - Fifteen" when score is 30 - 15', () => {
      // Arrange
      //let app = new TennisGame()
      //app.reset()
      app.playerAGetScore()
      app.playerAGetScore()
      app.playerBGetScore()

      // Act
      let result = app.echo()

      // Assert
      expect(result).toBe('Thirty - Fifteen')
  })
})
