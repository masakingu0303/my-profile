import { useEffect, useState } from 'react';
import { Container, ListGroup, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Question {
  id: number;
  content: string;
}

//const API_URL = 'http://localhost:3001/questions';
const API_URL = 'http://52.195.176.10:3000';


const ManagePage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const fetchQuestions = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setQuestions(data);
  };

  const handleDelete = async (id: number) => {
    if (confirm('本当に削除しますか？')) {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      fetchQuestions(); // 更新
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <Container className="py-4">
      <Card className="shadow-sm">
        <Card.Body>
          <h3>管理ページ（削除専用）</h3>
          <ListGroup className="my-3">
            {questions.map((q) => (
              <ListGroup.Item key={q.id} className="d-flex justify-content-between align-items-center">
                {q.content}
                <Button variant="danger" size="sm" onClick={() => handleDelete(q.id)}>削除</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Link to="/top">⬅ トップページに戻る</Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ManagePage;
