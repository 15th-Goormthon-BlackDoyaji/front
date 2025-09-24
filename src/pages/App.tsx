import { useState } from 'react'
import { Card, TextInput } from "@vapor-ui/core";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>흑도야지</h2>
       <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
     <Card.Root style={{ marginBottom: "20px", padding: "20px" }}>
        <Card.Header>
          <h2>Vapor UI 테스트</h2>
        </Card.Header>
        <Card.Body>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <TextInput placeholder="텍스트를 입력하세요" />
            <TextInput placeholder="비밀번호" type="password" />
          </div>
        </Card.Body>
      </Card.Root>
    
    </>
  )
}

export default App