# Пробник

## Сегодня мы установили ionik на VSCodium при помощи комманд
```shell
npm install -g @ionic/cli 
ionic start
```
## Закрепили за проектом в гите, создали и запустили при помощи
```shell
git clone https://github.com/PalePat/UwU2.git
npm install
ionic serve
```
## Воспользовались маленькими фишками для упрощения задачи
```shell
<ion-list>
  <ion-item *ngFor="let el of mylist">
    <ion-label>{{el}}</ion-label>
  </ion-item>
</ion-list>
</ion-content>
```
## Вся подробная документация находится на сайте ionic
[Источник](https://test-bc740.web.app/intro/cli)