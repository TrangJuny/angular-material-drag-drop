import { Component } from '@angular/core';
 
import { DndDropEvent, DropEffect } from "ngx-drag-drop";
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  columnMetadata = [
    {
      content: "Left",
      effectAllowed: "move",
      disable: false,
      handle: false,
    },
    {
      content: "Lefter",
      effectAllowed: "move",
      disable: false,
      handle: false,
    },
    {
      content: "Leftest",
      effectAllowed: "copyMove",
      disable: false,
      handle: false
    },
    {
      content: "Lefty",
      effectAllowed: "move",
      disable: false,
      handle: true,
    }
  ];
  
  onDragStart(event:DragEvent) {
 
    console.log("drag started", JSON.stringify(event, null, 2));
  }
  
  onDragEnd(event:DragEvent) {
    
    console.log("drag ended", JSON.stringify(event, null, 2));
  }
  
  onDraggableCopied(event:DragEvent) {
    
    console.log("draggable copied", JSON.stringify(event, null, 2));
  }
  
  onDraggableLinked(event:DragEvent) {
      
    console.log("draggable linked", JSON.stringify(event, null, 2));
  }
    
  onDraggableMoved(event:DragEvent) {
    
    console.log("draggable moved", JSON.stringify(event, null, 2));
  }
      
  onDragCanceled(event:DragEvent) {
    
    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }
  
  onDragover(event:DragEvent) {
    
    console.log("dragover", JSON.stringify(event, null, 2));
  }
  
  onDrop1(event:DndDropEvent) {
  
    console.log("dropped", JSON.stringify(event, null, 2));
  }
  
  onDragged(item:any, list:any[], effect:DropEffect) {
    
    console.log("drag ended: ", effect ," ", JSON.stringify(event, null, 2));
    if( effect === "move" ) {

      const index = list.indexOf( item );
      list.splice( index, 1 );

    }
  }

  onDrop( event:DndDropEvent, list?:any[] ) {
    console.log("dropped", JSON.stringify(event, null, 2));
    if( list
      && (event.dropEffect === "copy"
        || event.dropEffect === "move") ) {

      let index = event.index;

      if( typeof index === "undefined" ) {

        index = list.length;
      }

      list.splice( index, 0, event.data );    
    }
  }
}