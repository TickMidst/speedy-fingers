import axios from 'axios';

export const getRusText = async () => {
  try {
    const response = await axios.get('https://fish-text.ru/get?&number=2');
    const rawArray = response.data.text.split('');
    let symbolsArray = rawArray.map((e) => {
      return { symbol: e, className: 'textArea__text-symbol--general' };
    })
    return symbolsArray
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export const getEngText = async () => {
  try {
    const response = await axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text');
    const rawArray = response.data.split('')
    let symbolsArray = rawArray.map((e) => {
      return { symbol: e, className: 'textArea__text-symbol--general' };
    })
    return symbolsArray
  } catch (error) {
    console.error('Error fetching data:', error);
  }

}
