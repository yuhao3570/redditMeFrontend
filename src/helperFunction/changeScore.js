export default function changeScore(score, operation){
  return operation.includes('UP') ? score + 1 : score - 1;
}