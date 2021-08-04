import React from "react";
import "./SortingVisualizer.css";
import { get_insertion_animation } from "./insertion_algo.js";
import { get_quick_animation } from "./quick_sort.js";
import { get_bubble_animation } from "./bubble_algo.js";
import { get_heap_animation } from "./heap_algo.js";
import { get_cocktail_animation } from "./cocktail_algo.js";
import { get_gnome_animation } from "./gnome_algo.js";
import { getMergeSortAnimations } from "./merge_algo.js";
let speed_animation = 10;
let num_array = 90;
const pri_color = "rgb(19,51,55)";
let check = "yellow";
let check_f = "red";
let check_t = "green";
let bar_width = (116 - num_array) / 2;
let total_width = 1000;
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      size: num_array,
      one_bar_width: bar_width,
      status: 0,
    };
  }

  sort(str) {
    document.getElementById("message").innerHTML = "RUNNING";
    var n = document.getElementsByClassName("button");
    for (var i = 0; i < n.length; i++) {
      n[i].disabled = true;
      n[i].style.backgroundColor = "red";
    }
    document.getElementById("Arraysize").disabled = true;
    let animation = [];
    if (str === "insert") {
      speed_animation = 2;
      animation = get_insertion_animation(this.state.array).slice();
    } else if (str === "quick") {
      speed_animation = 10;
      animation = get_quick_animation(
        this.state.array,
        0,
        this.state.array.length - 1
      );
      animation = animation.slice();
    } else if (str === "bubble") {
      speed_animation = 2;
      animation = get_bubble_animation(this.state.array).slice();
    } else if (str === "heap") {
      speed_animation = 10;
      animation = get_heap_animation(this.state.array).slice();
    } else if (str === "cocktail") {
      speed_animation = 2;
      animation = get_cocktail_animation(this.state.array).slice();
    } else if (str === "gnome") {
      speed_animation = 2;
      animation = get_gnome_animation(this.state.array).slice();
    } else if (str === "merge") {
      speed_animation = 10;
      animation = getMergeSortAnimations(this.state.array).slice();
    }

    let count = 0;
    for (let i = 0; i < animation.length; ++i) {
      let arr_id = document.getElementsByClassName("array-bar");
      let [b1_idx, b2_idx, sp] = animation[i];

      let step = 4;
      while (step > 0) {
        if (step === 4 && sp!="Over") {
          setTimeout(() => {
            console.log(animation[i]);
            arr_id[b1_idx].style.backgroundColor = check;
            arr_id[b2_idx].style.backgroundColor = check;
          }, count * speed_animation);
          ++count;
        }

        if (step === 3 && sp!="Over") {
          const col = sp === "True" ? "red" : "green";
          setTimeout(() => {
            arr_id[b1_idx].style.backgroundColor = col;
            arr_id[b2_idx].style.backgroundColor = col;
          }, count * speed_animation);
          ++count;
        }
        if (step === 2) {
          if (sp === "True") {
            setTimeout(() => {
              const T = arr_id[b1_idx].style.height;
              arr_id[b1_idx].style.height = arr_id[b2_idx].style.height;
              arr_id[b2_idx].style.height = T;
            }, count * speed_animation);
            ++count;
          } else if (sp === "Over") {
            setTimeout(() => {
              const T = arr_id[b1_idx].style.height;
              arr_id[b1_idx].style.height = `${b2_idx}px`;
            }, count * speed_animation);
            ++count;
          }
        }
        if (step === 1 && sp!="Over") {
          setTimeout(() => {
            arr_id[b1_idx].style.backgroundColor = pri_color;
            arr_id[b2_idx].style.backgroundColor = pri_color;
          }, count * speed_animation);
          ++count;
        }

        --step;
      }
    }
    setTimeout(() => {
      document.getElementById("message").innerHTML = "WAITING";
      var n = document.getElementsByClassName("button");
      for (var i = 0; i < n.length; i++) {
        n[i].disabled = false;
        n[i].style.backgroundColor = "aqua";
      }

      document.getElementById("Arraysize").disabled = false;
    }, count * speed_animation);
  }

  componentDidMount() {
    this.reset_array();
  }

  reset_array() {
    const array = [];
    for (let i = 0; i < this.state.size; i++) {
      array.push(randomIntFromInterval(50, 500));
    }
    this.setState({ array });
  }

  slider_fun() {
    var slider = document.getElementById("Arraysize");
    var output = document.getElementById("size");

    output.innerHTML = slider.value;
    this.state.size = slider.value;
    this.state.one_bar_width = (116 - this.state.size) / 2.5;

    this.reset_array();
  }

  render() {
    const { array } = this.state;

    return (
      <div>
        <div className="buttons-container">
          <p id="message">WAITING</p>
          <div className="slidecontainer">
            <input
              type="range"
              min="5"
              max="92"
              class="slider"
              id="Arraysize"
              onInput={() => this.slider_fun()}
            ></input>
            <p>
              Array Size :<span id="size"></span>
            </p>
          </div>
          <button className="button" onClick={() => this.reset_array()}>
            Generate New Array
          </button>
          <button className="button" onClick={() => this.sort("merge")}>
            Merge Sort
          </button>
          <button className="button" onClick={() => this.sort("quick")}>
            Quick Sort
          </button>
          <button className="button" onClick={() => this.sort("insert")}>
            Insertion Sort
          </button>
          <button className="button" onClick={() => this.sort("heap")}>
            Heap Sort
          </button>
          <button className="button" onClick={() => this.sort("bubble")}>
            Bubble Sort
          </button>
          <button className="button" onClick={() => this.sort("cocktail")}>
            Cocktail Sort
          </button>
          <button className="button" onClick={() => this.sort("gnome")}>
            Gnome Sort
          </button>
        </div>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: pri_color,
                height: `${value}px`,
                width: `${this.state.one_bar_width}px`,
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}
