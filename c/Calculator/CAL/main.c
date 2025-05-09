#include <gtk/gtk.h>
#include <string.h>
#include <stdlib.h>

GtkWidget *entry_display;

void on_button_clicked(GtkButton *button, gpointer user_data) {
    const gchar *label = gtk_button_get_label(button);
    const gchar *current = gtk_entry_get_text(GTK_ENTRY(entry_display));
    gchar *new_text = g_strconcat(current, label, NULL);
    gtk_entry_set_text(GTK_ENTRY(entry_display), new_text);
}

void on_button_clear_clicked(GtkButton *button, gpointer user_data) {
    gtk_entry_set_text(GTK_ENTRY(entry_display), "");
}

void on_button_equal_clicked(GtkButton *button, gpointer user_data) {
    const gchar *expr = gtk_entry_get_text(GTK_ENTRY(entry_display));
    double result = 0;
    char op;
    double a, b;
    if (sscanf(expr, "%lf%c%lf", &a, &op, &b) == 3) {
        switch (op) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = a * b; break;
            case '/': result = b != 0 ? a / b : 0; break;
            default: result = 0;
        }
        char buf[64];
        snprintf(buf, sizeof(buf), "%g", result);
        gtk_entry_set_text(GTK_ENTRY(entry_display), buf);
    }
}

int main(int argc, char *argv[]) {
    GtkBuilder *builder;
    GtkWidget *window;
    GtkWidget *button_0, *button_1, *button_2, *button_3, *button_4, *button_5, *button_6, *button_7, *button_8, *button_9;
    GtkWidget *button_plus, *button_minus, *button_multiply, *button_divide, *button_clear, *button_point, *button_equal;

    gtk_init(&argc, &argv);
    builder = gtk_builder_new_from_file("/root/study/CAL/cal.glade");
    gtk_builder_connect_signals(builder, NULL);

    window = GTK_WIDGET(gtk_builder_get_object(builder, "main_window"));
    entry_display = GTK_WIDGET(gtk_builder_get_object(builder, "entry_display"));

    button_0 = GTK_WIDGET(gtk_builder_get_object(builder, "button_0"));
    button_1 = GTK_WIDGET(gtk_builder_get_object(builder, "button_1"));
    button_2 = GTK_WIDGET(gtk_builder_get_object(builder, "button_2"));
    button_3 = GTK_WIDGET(gtk_builder_get_object(builder, "button_3"));
    button_4 = GTK_WIDGET(gtk_builder_get_object(builder, "button_4"));
    button_5 = GTK_WIDGET(gtk_builder_get_object(builder, "button_5"));
    button_6 = GTK_WIDGET(gtk_builder_get_object(builder, "button_6"));
    button_7 = GTK_WIDGET(gtk_builder_get_object(builder, "button_7"));
    button_8 = GTK_WIDGET(gtk_builder_get_object(builder, "button_8"));
    button_9 = GTK_WIDGET(gtk_builder_get_object(builder, "button_9"));

    button_plus = GTK_WIDGET(gtk_builder_get_object(builder, "button_plus"));
    button_minus = GTK_WIDGET(gtk_builder_get_object(builder, "button_minus"));
    button_multiply = GTK_WIDGET(gtk_builder_get_object(builder, "button_multiply"));
    button_divide = GTK_WIDGET(gtk_builder_get_object(builder, "button_divide"));
    button_clear = GTK_WIDGET(gtk_builder_get_object(builder, "button_clear"));
    button_point = GTK_WIDGET(gtk_builder_get_object(builder, "button_point"));
    button_equal = GTK_WIDGET(gtk_builder_get_object(builder, "button_equal"));

    g_signal_connect(button_0, "clicked", G_CALLBACK(on_button_clicked), NULL);
    g_signal_connect(button_1, "clicked", G_CALLBACK(on_button_clicked), NULL);
    g_signal_connect(button_2, "clicked", G_CALLBACK(on_button_clicked), NULL);
    g_signal_connect(button_3, "clicked", G_CALLBACK(on_button_clicked), NULL);
    g_signal_connect(button_4, "clicked", G_CALLBACK(on_button_clicked), NULL);
    g_signal_connect(button_5, "clicked", G_CALLBACK(on_button_clicked), NULL);
    g_signal_connect(button_6, "clicked", G_CALLBACK(on_button_clicked), NULL);
    g_signal_connect(button_7, "clicked", G_CALLBACK(on_button_clicked), NULL);
    g_signal_connect(button_8, "clicked", G_CALLBACK(on_button_clicked), NULL);
    g_signal_connect(button_9, "clicked", G_CALLBACK(on_button_clicked), NULL);

    g_signal_connect(button_plus, "clicked", G_CALLBACK(on_button_clicked), NULL);
    g_signal_connect(button_minus, "clicked", G_CALLBACK(on_button_clicked), NULL);
    g_signal_connect(button_multiply, "clicked", G_CALLBACK(on_button_clicked), NULL);
    g_signal_connect(button_divide, "clicked", G_CALLBACK(on_button_clicked), NULL);
    g_signal_connect(button_point, "clicked", G_CALLBACK(on_button_clicked), NULL);

    g_signal_connect(button_clear, "clicked", G_CALLBACK(on_button_clear_clicked), NULL);
    g_signal_connect(button_equal, "clicked", G_CALLBACK(on_button_equal_clicked), NULL);

    gtk_widget_show_all(window);
    gtk_main();

    return 0;
}

