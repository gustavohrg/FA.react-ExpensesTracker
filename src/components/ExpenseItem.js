import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>07 de dezembro de 2021</div>
      <div className='expense-item__description'>
        <h2>Seguro de carro</h2>
        <div className='expense-item__price'>R$ 294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
