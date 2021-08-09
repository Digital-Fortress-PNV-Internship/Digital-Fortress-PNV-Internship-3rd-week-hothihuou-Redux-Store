console.log(window.Redux)

const { createStore } = window.Redux;

// SETUP REDUX STORE
// state
// reducer
// store
// 

const initialState =[
    'hello'
];
// khởi tạo State
// const initialState = JSON.parse(localStorage.getItem('hobby_list')) || [];

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HOBBY': {
      // lấy state hiện tại
      const newList = [...state];
      newList.push(action.payload);
      return newList;
    }
    default:
      return state;
  }
}


// khởi tạo store
const store = createStore(hobbyReducer);

// -----------------


// RENDER REDUX HOBBY LIST
const renderHobbyList = (hobbyList) => {

  if (!Array.isArray(hobbyList) || hobbyList.length === 0) return;
//get cái id
  const ulElement = document.querySelector('#hobbyListId');
  if (!ulElement) return;

  // reset previous content of ul
  ulElement.innerHTML = '';

  for (const hobby of hobbyList) {
    // tạo thẻ li thêm vào ulElement
    const liElement = document.createElement('li');
    liElement.textContent = hobby;
// appendChild để nối nut liElement vào ulElement
    ulElement.appendChild(liElement);
  }
}





// RENDER INITIAL HOBBY LIST
const initialHobbyList = store.getState();
console.log(initialHobbyList);
renderHobbyList(initialHobbyList);
// renderHobbyList(['initialHobbyList','2','3']);




// HANDLE FORM SUBMIT
// lấy form submit

const hobbyFormElement = document.querySelector('#hobbyFormId');

if (hobbyFormElement) {
  const handleFormSubmit = (e) => {
    // prevent browser from reloading
    e.preventDefault();
// Lấy giá trị trong input
    const hobbyTextElement = hobbyFormElement.querySelector('#hobbyTextId');
    if (!hobbyTextElement) return;

    console.log('SUBMIT', hobbyTextElement.value);


    // Dispatch action
    const action = {
      type: 'ADD_HOBBY',
      payload: hobbyTextElement.value
    };

    store.dispatch(action);

    //reset form
    hobbyFormElement.reset();
  };

  
// khi submit thì mình gọi handleFormSubmit
  hobbyFormElement.addEventListener('submit', handleFormSubmit);
}




// mỗi lần state thay đổi mình sẽ update lại state
store.subscribe(() => {
  console.log('STATE UPDATE: ', store.getState());
  const newHobbyList = store.getState();
  renderHobbyList(newHobbyList);

  //localStorage.setItem('hobby_list', JSON.stringify(newHobbyList));
});