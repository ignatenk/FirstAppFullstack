import './App.css';

function App() {
  return (
        <div>
          <div>
            <div>
              <h1>Список контактов</h1>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th scope = 'colume name'>№</th>
                    <th scope = 'colume name'>ФИО</th>
                    <th scope = 'colume name'>Телефон</th>
                    <th scope = 'colume name'>Заметки</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <th scope = 'row'>1</th>
                    <th>ФИО 1</th>
                    <th>Телефон 1</th>
                    <th>Заметка 1</th>
                  </tr>

                  <tr>
                    <th scope = 'row'>2</th>
                    <th>ФИО 2</th>
                    <th>Телефон 2</th>
                    <th>Заметка 2</th>
                  </tr>

                  <tr>
                    <th scope = 'row'>3</th>
                    <th>ФИО 3</th>
                    <th>Телефон 3</th>
                    <th>Заметка 3</th>
                  </tr>

                  <tr>
                    <th scope = 'row'>4</th>
                    <th>ФИО 4</th>
                    <th>Телефон 4</th>
                    <th>Заметка 4</th>
                  </tr>

                </tbody>

              </table>
            </div>
          </div>
        </div>

  );
}

export default App;
