// All pattern functions

// ___________Pattern 1 ___________
function p1(n) {

    var row = 0;
    while(row < n){
        
    var col = 0;
    while(col <= row ){
        process.stdout.write("* ");
        col++;
    }
    process.stdout.write("\n");
    row++;
    }

    process.stdout.write("\n");
}

// ____________Pattern 2____________
function p2(n) {
    
    var row = 0;
    while(row < n){
        
    var col = 0;
    while(col <= row ){
        process.stdout.write((col+1)+" ");
        col++;
    }
    process.stdout.write("\n");
    row++;
    }

    process.stdout.write("\n");
}

// ____________Pattern 3____________
function p3(n) {
    
    var row = 0;
    while(row < n){
        
    var col = 0;
    var col_mirr = 0;
    while(col < n+row ){
        if( col >= n-row-1 && col <= n+row-1 ){
            if( col < n ){
              col_mirr++;
              process.stdout.write((col_mirr)+" ");
            }else{
              col_mirr--;
              process.stdout.write((col_mirr)+" ");
            }
        }else{
            process.stdout.write("  ");
        }
        col++;
    }
    process.stdout.write("\n");
    row++;
    }

    process.stdout.write("\n");
}


// ____________Pattern 4____________
function p4(n) {
    
    var row = 0;
    while(row < n){
        
    var col = 0;
    var col_mirr = row;
    while(col < n+row ){
        if( col >= n-row-1 && col <= n+row-1 ){
            if( col < n ){
              col_mirr++;
              process.stdout.write((col_mirr)+" ");
            }else{
              col_mirr--;
              process.stdout.write((col_mirr)+" ");
            }
        }else{
            process.stdout.write("  ");
        }
        col++;
    }
    process.stdout.write("\n");
    row++;
    }

    process.stdout.write("\n");
}


// ____________Pattern 5____________
function p5(n) {
    
    var row = 0;
    while(row < n){
        
    var col = 0;
    var col_mirr = 1;
    while(col <= row ){
        process.stdout.write((col_mirr)+" ");
        col_mirr *= (row-col)/(col+1);
        col++;
    }
    process.stdout.write("\n");
    row++;
    }

    process.stdout.write("\n");
}


// ______________________________________Pattern 6_________________________________________
function p6(n) {
    
    var row = 0;
    // first loop
    while(row < n){
    var col = 0;
    while(col < n+row ){
        if( col >= n-row-1 && col <= n+row-1 ){
            process.stdout.write("* ");
        }else{
            process.stdout.write("  ");
        }
        col++;
    }
    process.stdout.write("\n");
    row++;
    }

    // second loop
    row -= 2;
    while(row >= 0){
        var col = 0;
        while(col < n+row ){
            if( col >= n-row-1 && col <= n+row-1 ){
                process.stdout.write("* ");
            }else{
                process.stdout.write("  ");
            }
            col++;
        }
        process.stdout.write("\n");
        row--;
        }

        process.stdout.write("\n");
}

// _______________________________Pattern 7_______________________________________
function p7(n) {
    
    var row = 0;
    var row_mirr = 0;
    
    while(row < 2*n ){
    var col = 0;
    while(col < 2*n ){
      
            if( col <= row_mirr || col >= 2*n-row_mirr-1 ){
                process.stdout.write("* ");
            }else{
                process.stdout.write("  ");
            }
            col++;
        
    }
    process.stdout.write("\n");
   
        row++;
        if( row<n ){
            row_mirr++;
        }else{
            row_mirr--;
        }
    
    }


    process.stdout.write("\n");
}

// ______________________________________Pattern 8_________________________________________
function p8(n) {
    var row = 0;
    var row_mirr = 0;
    
    while(row < 2*n-1 ){
    var col = 0;
    while(col < 2*n-1 ){
      
            if( col > n-row_mirr-1 && col < n+row_mirr-1 ){
                process.stdout.write("  ");
            }else{
                process.stdout.write("* ");
            }
            col++;
        
    }
    process.stdout.write("\n");
   
        row++;
        if( row<n ){
            row_mirr++;
        }else{
            row_mirr--;
        }
    
    }
    

    process.stdout.write("\n");
}

//________________________________________Pattern 9____________________________________________

function p9(n) {
    var min = 0;
    for(var i = 1; i <= n; i++) 
    {
        for(var j = 1; j <= n; j++)
        {
            min = i;
            if( j< i ){
                min = j;
            }
            process.stdout.write((n - min + 1)+" ");
        }
        for(var j = n - 1; j >= 1; j--)
        {
            min = i;
            if( j< i ){
                min = j;
            }
            process.stdout.write((n - min + 1)+" ");
        }
        process.stdout.write("\n");
    }
      
    for(var i = n - 1; i >= 1; i--) 
    {
        for(var j = 1; j <= n; j++) 
        {
            min = i < j ? i : j;
            process.stdout.write((n - min + 1)+" ");
        }
        for(var j = n - 1; j >= 1; j--) 
        {
            min = i < j ? i : j;
            process.stdout.write((n - min + 1)+" ");
        }
        process.stdout.write("\n");
    }


    process.stdout.write("\n");
}


let n = 5;

// Printing all the patterns serialwise

p1(n);
p2(n);
p3(n);
p4(n);
p5(n);
p6(n);
p7(n);
p8(n);
p9(n);