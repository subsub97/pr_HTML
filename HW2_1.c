#include <wait.h>
#include <stdio.h>
#include<unistd.h>
#include<fcntl.h>
#include<stdlib.h>
#include<string.h>
#include<sys/types.h>
#include<sys/wait.h>


int main(int argc,char *argv[])
{
    int fd;
    char buf[10];
    int n;

    fd = open("abc.txt",O_RDONLY);

    if(fork() == 0){
        int pid = getpid();
        while( (n = read(fd,buf,sizeof(buf)) ) != 0){
            printf("Child1 : %d %s",pid,buf);
            sleep(1);
        }
        exit(0);
    }
    else{
        if(fork() == 0)
        {
            int pid = getpid();
            while( (n = read(fd,buf,sizeof(buf))) != 0){
                printf("Child2 : %d %s",pid , buf);
                sleep(1);
            }
            exit(0);
        }
        else{
            int pid = getpid();
            while(( n = read(fd,buf,sizeof(buf)) ) != 0){
                printf("Parent : %d %s",pid,buf);
                sleep(1);
            }
            wait(NULL);
            wait(NULL);
            close(fd);
        }
        
    }
    
}
