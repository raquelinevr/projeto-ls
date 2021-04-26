export async function clock(){
  const date = new Date();
  date.setUTCHours(5);
  // ['2021-04-26','02:18:27.383Z']
  const textDate = date.toISOString().split('T');
  const dateFormat = textDate[0].split('-').reverse().join('/')
  const timeFormat = textDate[1].split(':')[0] +':'+ textDate[1].split(':')[1]
  document.querySelector('#hora-data').textContent = `${dateFormat} ${timeFormat} │ Dinamarca`;
}