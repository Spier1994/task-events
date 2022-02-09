/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', (e) => {
        e.target.remove();
    });
    document.body.appendChild(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');
    arr.forEach((element) => {
        const li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
    });

    ul.addEventListener(
        'mouseover',
        (e) => {
            if (e.target && e.target.tagName === 'LI') {
                e.target.title = e.target.textContent;
            }
        },
        true,
    );

    document.body.appendChild(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const a = document.createElement('a');
    const link = 'https://tensor.ru/';
    a.textContent = 'tensor';
    a.setAttribute('href', link);

    a.addEventListener('click', (e) => {
        if (!e.target.textContent.includes(link)) {
            e.preventDefault();
            e.target.textContent = e.target.textContent + ' ' + e.target.href;
            return;
        }
    });
    document.body.appendChild(a);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const createElement = (tagName, textContent = '', cb) => {
        const node = document.createElement(tagName);
        node.textContent = textContent;
        if (cb) {
            node.addEventListener('click', cb);
        }
        return node;
    };
    const ul = createElement('ul', '', (e) => {
        if (e.target && e.target.tagName === 'LI') {
            e.target.textContent = e.target.textContent + '!';
        }
    });
    ul.appendChild(createElement('li', 'Пункт'));
    const button = createElement('button', 'Добавить пункт', () =>
        ul.appendChild(createElement('li', 'Пункт')),
    );

    document.body.appendChild(ul);
    document.body.appendChild(button);
}
