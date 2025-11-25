export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          admin_notes: string | null
          company: string | null
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          admin_notes?: string | null
          company?: string | null
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          admin_notes?: string | null
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      gsc_connections: {
        Row: {
          access_token: string | null
          created_at: string | null
          id: string
          refresh_token: string | null
          site_url: string
          token_expires_at: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          access_token?: string | null
          created_at?: string | null
          id?: string
          refresh_token?: string | null
          site_url: string
          token_expires_at?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          access_token?: string | null
          created_at?: string | null
          id?: string
          refresh_token?: string | null
          site_url?: string
          token_expires_at?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      gsc_crawl_data: {
        Row: {
          clicks: number | null
          connection_id: string | null
          crawl_status: string | null
          fetched_at: string | null
          id: string
          impressions: number | null
          indexed: boolean | null
          last_crawled: string | null
          position: number | null
          url: string
        }
        Insert: {
          clicks?: number | null
          connection_id?: string | null
          crawl_status?: string | null
          fetched_at?: string | null
          id?: string
          impressions?: number | null
          indexed?: boolean | null
          last_crawled?: string | null
          position?: number | null
          url: string
        }
        Update: {
          clicks?: number | null
          connection_id?: string | null
          crawl_status?: string | null
          fetched_at?: string | null
          id?: string
          impressions?: number | null
          indexed?: boolean | null
          last_crawled?: string | null
          position?: number | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "gsc_crawl_data_connection_id_fkey"
            columns: ["connection_id"]
            isOneToOne: false
            referencedRelation: "gsc_connections"
            referencedColumns: ["id"]
          },
        ]
      }
      proposal_requests: {
        Row: {
          admin_notes: string | null
          budget_approval_status: string | null
          business_type: string | null
          company_name: string
          contact_name: string | null
          contract_expiry_date: string | null
          created_at: string
          documents: Json | null
          email: string
          has_existing_provider: boolean | null
          id: string
          phone: string | null
          services: Json
          sites: Json
          status: Database["public"]["Enums"]["proposal_status"]
          updated_at: string
          urgency_level: string | null
        }
        Insert: {
          admin_notes?: string | null
          budget_approval_status?: string | null
          business_type?: string | null
          company_name: string
          contact_name?: string | null
          contract_expiry_date?: string | null
          created_at?: string
          documents?: Json | null
          email: string
          has_existing_provider?: boolean | null
          id?: string
          phone?: string | null
          services?: Json
          sites?: Json
          status?: Database["public"]["Enums"]["proposal_status"]
          updated_at?: string
          urgency_level?: string | null
        }
        Update: {
          admin_notes?: string | null
          budget_approval_status?: string | null
          business_type?: string | null
          company_name?: string
          contact_name?: string | null
          contract_expiry_date?: string | null
          created_at?: string
          documents?: Json | null
          email?: string
          has_existing_provider?: boolean | null
          id?: string
          phone?: string | null
          services?: Json
          sites?: Json
          status?: Database["public"]["Enums"]["proposal_status"]
          updated_at?: string
          urgency_level?: string | null
        }
        Relationships: []
      }
      supplier_applications: {
        Row: {
          accreditation_documents: Json | null
          admin_notes: string | null
          company_name: string
          contact_name: string
          created_at: string
          email: string
          has_engineer_qualification_tracking: boolean | null
          has_near_miss_reporting: boolean | null
          has_safety_policy: boolean | null
          id: string
          insurance_documents: Json | null
          phone: string
          rams_template: Json | null
          regions: string[]
          registered_address: string
          service_categories: string[]
          status: string | null
          updated_at: string
          website: string | null
          years_established: number
        }
        Insert: {
          accreditation_documents?: Json | null
          admin_notes?: string | null
          company_name: string
          contact_name: string
          created_at?: string
          email: string
          has_engineer_qualification_tracking?: boolean | null
          has_near_miss_reporting?: boolean | null
          has_safety_policy?: boolean | null
          id?: string
          insurance_documents?: Json | null
          phone: string
          rams_template?: Json | null
          regions: string[]
          registered_address: string
          service_categories: string[]
          status?: string | null
          updated_at?: string
          website?: string | null
          years_established: number
        }
        Update: {
          accreditation_documents?: Json | null
          admin_notes?: string | null
          company_name?: string
          contact_name?: string
          created_at?: string
          email?: string
          has_engineer_qualification_tracking?: boolean | null
          has_near_miss_reporting?: boolean | null
          has_safety_policy?: boolean | null
          id?: string
          insurance_documents?: Json | null
          phone?: string
          rams_template?: Json | null
          regions?: string[]
          registered_address?: string
          service_categories?: string[]
          status?: string | null
          updated_at?: string
          website?: string | null
          years_established?: number
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
      proposal_status:
        | "new"
        | "reviewing"
        | "contacted"
        | "quoted"
        | "won"
        | "lost"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
      proposal_status: [
        "new",
        "reviewing",
        "contacted",
        "quoted",
        "won",
        "lost",
      ],
    },
  },
} as const
