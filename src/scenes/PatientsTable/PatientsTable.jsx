import React from "react";
import style from "./style.module.css";
import { Toolbar, Button } from "../../components";

export const PatientsTable = ({ children }) => {
  return (
    <div>
      <Toolbar title="Пацієнти">
        <Button>Додати пацієнта</Button>
      </Toolbar>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Прізвище</th>
            <th>Ім'я</th>
            <th>По-батькові</th>
            <th>Дата народження</th>
            <th>Стать</th>
            <th>Адреса</th>
            <th>Телефон</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Петренко</td>
            <td>Василь</td>
            <td>Петрович</td>
            <td>01.01.2000</td>
            <td>Чоловік</td>
            <td>Вінниця</td>
            <td>+380505050505</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Петренко</td>
            <td>Василь</td>
            <td>Петрович</td>
            <td>01.01.2000</td>
            <td>Чоловік</td>
            <td>Вінниця</td>
            <td>+380505050505</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Петренко</td>
            <td>Василь</td>
            <td>Петрович</td>
            <td>01.01.2000</td>
            <td>Чоловік</td>
            <td>Вінниця</td>
            <td>+380505050505</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Петренко</td>
            <td>Василь</td>
            <td>Петрович</td>
            <td>01.01.2000</td>
            <td>Чоловік</td>
            <td>Вінниця</td>
            <td>+380505050505</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Петренко</td>
            <td>Василь</td>
            <td>Петрович</td>
            <td>01.01.2000</td>
            <td>Чоловік</td>
            <td>Вінниця</td>
            <td>+380505050505</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};